import React from 'react';

interface TextProps {
    name: string;
    color?: string;
    fontWeight?: string | number;
    fontSize?: string | number;
    hasBorder?: boolean;
    borderColor?: string;
}

const Text = ({
                  name,
                  color,
                  fontWeight = 700,
                  fontSize = '150px',
                  hasBorder = false,
                  borderColor,
              }: TextProps) => {
    const style: React.CSSProperties = {
        ...(color ? { color } : {}),
        fontWeight,
        fontSize,
        borderBottom: hasBorder ? `1px solid ${borderColor ?? 'currentColor'}` : 'none',
    };

    return (
        <div className="text">
            <p style={style}>{name}</p>
        </div>
    );
};

export default Text;
