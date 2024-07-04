function parseColors(colorString) {
  const colorArray = colorString.trim().split('\n').map(line => {
    const [name, rgb] = line.split(' = ');
    const [r, g, b] = rgb.split(',').map(Number);
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    return { name, hex };
  });
  return colorArray;
}

export default function ColorPalette({ colors, rawColors }) {

    let colorArray = colors
    if (rawColors) {
        colorArray = parseColors(rawColors)
        console.log(colorArray)

    }

        return (
            <>
                {colorArray.map(e =>
                    <p
                        style={{
                        backgroundColor: e.hex,
                        borderRadius: '20px',
                        color: '#fff',
                            padding: '10px',
                        boxShadow: '0px 2px 10px #20000022'
                        }}>
                        <span className="text--bold">{e.name}</span> - {e.hex}
                        </p>
                    
                )}
            </>
        )
    
}