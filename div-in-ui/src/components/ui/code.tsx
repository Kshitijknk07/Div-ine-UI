import * as React from "react";
import { Copy, Check, Code as CodeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  filename?: string;
  language?: string;
  copyable?: boolean;
  showLineNumbers?: boolean;
}

export function Code({
  className,
  children,
  filename,
  language,
  copyable = true,
  showLineNumbers = false,
  ...props
}: CodeProps) {
  const [copied, setCopied] = React.useState(false);
  const codeRef = React.useRef<HTMLPreElement>(null);

  const handleCopy = React.useCallback(() => {
    if (!codeRef.current?.textContent) return;
    
    navigator.clipboard.writeText(codeRef.current.textContent);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#0d101e] rounded-lg p-4 relative font-mono text-sm">
      {filename && (
        <div className="flex justify-between items-center mb-2 text-[#a2a3f5]">
          <div className="flex items-center gap-2">
            <CodeIcon className="w-4 h-4" />
            <span>{filename}</span>
            {language && (
              <span className="text-xs bg-[#678aee]/10 px-2 py-0.5 rounded text-[#678aee]">
                {language}
              </span>
            )}
          </div>
          {copyable && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopy}
              className="text-[#a2a3f5] hover:text-white hover:bg-[#a2a3f5]/10"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          )}
        </div>
      )}
      <pre
        ref={codeRef}
        className={cn(
          "scrollbar-show overflow-x-auto text-[#bfc9f2] p-2",
          showLineNumbers && "line-numbers",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
} 