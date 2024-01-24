import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css'; // Import GitHub Markdown styles

interface MarkdownRendererProps {
    filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        // Load the Markdown file content
        fetch(filePath)
            .then((response) => response.text())
            .then((content) => setMarkdownContent(content));
    }, [filePath]);

    return (
        <div className="markdown-container markdown-body bg-white text-black text-2xl">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
