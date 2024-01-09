import { CopyBlock, dracula } from "react-code-blocks";

export function CodeBlock(props: Partial<Parameters<typeof CopyBlock>[0]>) {
	return <CopyBlock language="jsx" showLineNumbers codeBlock theme={dracula} text="" wrapLongLines {...props} />;
}
