interface TextProps {
    name: string;
    color?: string;
    fontWeight?: string | number;
    fontSize?: string | number;
    hasBorder?: boolean;
    borderColor?: string,
}


const Text = ({
                                  name,
                                  color = '#141414',
                                  fontWeight = '700',
                                  fontSize = '150px',
                                  hasBorder = false,
                                  borderColor = '#141414',
                              }: TextProps) => (
    <div className="text">
        <p style={{
            color: color,
            fontWeight: fontWeight,
            fontSize: fontSize,
            borderBottom: hasBorder ? `1px solid ${borderColor}` : 'none',
            borderColor: borderColor,
        }}>
            {name}
        </p>
    </div>
)

export default Text;

