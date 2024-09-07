import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function SupportChatComponent() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center bg-primary px-4 py-3 text-primary-foreground">
        <div className="font-medium">Jane Doe</div>
      </header>
      <div className="flex-1 space-y-4 overflow-auto p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="max-w-[80%] rounded-lg bg-muted p-3">
            <p>Hello, how are you doing today?</p>
            <div className="mt-1 text-xs text-muted-foreground">3:45 PM</div>
          </div>
        </div>
        <div className="flex items-start justify-end gap-3">
          <div className="max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
            <p>I'm doing great, thanks for asking!</p>
            <div className="mt-1 text-xs text-primary-foreground/80">
              3:46 PM
            </div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="You" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="max-w-[80%] rounded-lg bg-muted p-3">
            <p>
              That's great to hear! I have something I wanted to discuss with
              you.
            </p>
            <div className="mt-1 text-xs text-muted-foreground">3:47 PM</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-border bg-background px-4 py-3">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg pr-12"
        />
        <Button type="submit" size="icon" className="absolute right-7">
          <ArrowUpIcon className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
