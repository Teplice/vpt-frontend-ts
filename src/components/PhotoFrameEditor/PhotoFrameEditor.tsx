import React, { useState, useRef, useEffect, ChangeEvent, MouseEvent, TouchEvent } from 'react';

interface PhotoFrameEditorProps {
    /** Cesta k rámečku (např. "/frames/fb-frame.png") */
    frameSrc: string;
}

interface Point {
    x: number;
    y: number;
}

// 🎨 Definice stylů ve stylu Twitter Bootstrap 5
const bootstrapStyles = {
    // Základní tlačítko
    btn: {
        display: 'inline-block',
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: 'center' as const,
        textDecoration: 'none',
        verticalAlign: 'middle',
        cursor: 'pointer',
        userSelect: 'none' as const,
        border: '1px solid transparent',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        borderRadius: '0.375rem', // Bootstrap 5 border-radius
        transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
    // Tlačítko pro nahrání (Outline Primary)
    btnOutlinePrimary: {
        color: '#0d6efd',
        borderColor: '#0d6efd',
        backgroundColor: 'transparent',
    },
    // Tlačítko Stáhnout PNG (Success - zelené)
    btnSuccess: {
        color: '#fff',
        backgroundColor: '#198754',
        borderColor: '#198754',
    },
    // Tlačítko Stáhnout JPG (Primary - modré)
    btnPrimary: {
        color: '#fff',
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
    },
};

export default function PhotoFrameEditor({ frameSrc }: PhotoFrameEditorProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Ref na skrytý file input pro Bootstrap tlačítko
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
    const [scale, setScale] = useState<number>(1);
    const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState<Point>({ x: 0, y: 0 });
    const [touchDistance, setTouchDistance] = useState<number | null>(null);

    // Stav pro hover efekty na tlačítkách
    const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

    const CANVAS_SIZE: number = 800;

    const getTouchDistance = (touches: React.TouchList): number => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
            if (typeof event.target?.result === 'string') {
                const img = new Image();
                img.onload = () => {
                    setUserImage(img);
                    setScale(1);
                    setPosition({ x: 0, y: 0 });
                };
                img.src = event.target.result;
            }
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleWheel = (e: WheelEvent): void => {
            e.preventDefault();
            const zoomFactor = e.deltaY < 0 ? 1.05 : 0.95;
            setScale((prevScale) => Math.min(Math.max(prevScale * zoomFactor, 0.1), 5));
        };

        canvas.addEventListener('wheel', handleWheel, { passive: false });
        return () => canvas.removeEventListener('wheel', handleWheel);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        if (userImage) {
            ctx.save();
            const centerX = CANVAS_SIZE / 2 + position.x;
            const centerY = CANVAS_SIZE / 2 + position.y;

            const scaledWidth = userImage.width * scale;
            const scaledHeight = userImage.height * scale;

            ctx.drawImage(
                userImage,
                centerX - scaledWidth / 2,
                centerY - scaledHeight / 2,
                scaledWidth,
                scaledHeight
            );
            ctx.restore();
        }

        if (frameSrc) {
            const frameImg = new Image();
            frameImg.crossOrigin = 'anonymous';
            frameImg.onload = () => {
                ctx.drawImage(frameImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
            };
            frameImg.src = frameSrc;
        }
    }, [userImage, scale, position, frameSrc]);

    const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>): void => {
        if (!userImage) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>): void => {
        if (!isDragging) return;
        setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };

    const handleMouseUp = (): void => setIsDragging(false);

    const handleTouchStart = (e: TouchEvent<HTMLCanvasElement>): void => {
        if (!userImage) return;

        if (e.touches.length === 1) {
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y
            });
            setTouchDistance(null);
        } else if (e.touches.length === 2) {
            setIsDragging(false);
            setTouchDistance(getTouchDistance(e.touches));
        }
    };

    const handleTouchMove = (e: TouchEvent<HTMLCanvasElement>): void => {
        if (!userImage) return;

        if (e.touches.length === 1 && isDragging) {
            setPosition({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y
            });
        } else if (e.touches.length === 2 && touchDistance !== null) {
            const newDistance = getTouchDistance(e.touches);
            const factor = newDistance / touchDistance;

            setScale((prevScale) => Math.min(Math.max(prevScale * factor, 0.1), 5));
            setTouchDistance(newDistance);
        }
    };

    const handleTouchEnd = (): void => {
        setIsDragging(false);
        setTouchDistance(null);
    };

    const handleDownload = (format: 'image/png' | 'image/jpeg' = 'image/png'): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const imageURL = canvas.toDataURL(format, 0.92);
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = `fotka-s-rameckem.${format === 'image/jpeg' ? 'jpg' : 'png'}`;
        link.click();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>

            {/* Skrytý nativní input pro soubory */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
            />

            {/* Bootstrap tlačítko pro výběr fotky */}
            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                onMouseEnter={() => setHoveredBtn('upload')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                    ...bootstrapStyles.btn,
                    ...bootstrapStyles.btnOutlinePrimary,
                    backgroundColor: hoveredBtn === 'upload' ? '#0d6efd' : 'transparent',
                    color: hoveredBtn === 'upload' ? '#fff' : '#0d6efd',
                }}
            >
                📁 Vybrat fotku (JPG/PNG)
            </button>

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    border: '1px solid #dee2e6', // Bootstrap barva rámečku
                    borderRadius: '0.375rem',
                    maxWidth: '100%',
                    height: 'auto',
                    background: '#f8f9fa',
                    cursor: isDragging ? 'grabbing' : userImage ? 'grab' : 'default',
                    touchAction: 'none'
                }}
            />

            {/* Akční tlačítka pro stažení */}
            {userImage && (
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        type="button"
                        onClick={() => handleDownload('image/png')}
                        onMouseEnter={() => setHoveredBtn('png')}
                        onMouseLeave={() => setHoveredBtn(null)}
                        style={{
                            ...bootstrapStyles.btn,
                            ...bootstrapStyles.btnSuccess,
                            backgroundColor: hoveredBtn === 'png' ? '#157347' : '#198754',
                            borderColor: hoveredBtn === 'png' ? '#146c43' : '#198754',
                        }}
                    >
                        Stáhnout foto s rámečkem
                    </button>

                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => handleDownload('image/jpeg')}*/}
                    {/*    onMouseEnter={() => setHoveredBtn('png-jpg')}*/}
                    {/*    onMouseLeave={() => setHoveredBtn(null)}*/}
                    {/*    style={{*/}
                    {/*        ...bootstrapStyles.btn,*/}
                    {/*        ...bootstrapStyles.btnPrimary,*/}
                    {/*        backgroundColor: hoveredBtn === 'png-jpg' ? '#0b5ed7' : '#0d6efd',*/}
                    {/*        borderColor: hoveredBtn === 'png-jpg' ? '#0a58ca' : '#0d6efd',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Stáhnout JPG*/}
                    {/*</button>*/}
                </div>
            )}
        </div>
    );
}