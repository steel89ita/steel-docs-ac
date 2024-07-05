export default function PropsTable(props) {

    let cols = props.columns || ["Name", "Description", "Possible values"]

    let rows = props.rows || []

    return (
      <>
        <table>
          <thead>
            <tr>
              {cols.map((c) => (
                <th>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr>
                <td>{r.name}</td>
                <td>{r.desc}</td>
                <td>
                  <strong>{r.vals}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}
