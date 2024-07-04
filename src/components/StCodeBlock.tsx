import CodeBlock from '@theme/CodeBlock';

export default function StCodeBlock(props) {
  return (
    <div>
      <CodeBlock
        language={props.language}
        title={props.title}
        showLineNumbers={props.showLineNumbers}>
        {props.children}
      </CodeBlock>
    </div>
  );
}