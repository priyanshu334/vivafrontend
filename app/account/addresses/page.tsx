import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AddressBook() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
      <nav className="text-xs text-muted-foreground">
        HOME | ACCOUNT | <span className="text-primary">MY ADDRESS</span>
      </nav>

      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold">MY ADDRESSES</h2>
        <div className="text-right mt-2">
          <Button variant="outline">+ ADD NEW ADDRESS</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">DEFAULT ADDRESS</h3>
        <Card className="bg-muted">
          <CardContent className="p-4 space-y-2">
            <p className="font-semibold">NAME OF PERSON</p>
            <p>Address Address Address Address Address<br />
            Colony<br />
            State-492547<br />
            State<br />
            Mobile: 1258465214</p>
            <div className="flex space-x-4 pt-4">
              <Button className="bg-rose-400 text-white hover:bg-rose-500">EDIT</Button>
              <Button variant="outline">REMOVE</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">OTHER ADDRESSES</h3>

        {[1, 2].map((_, i) => (
          <Card key={i} className="mb-4">
            <CardContent className="p-4 space-y-2">
              <p className="font-semibold">NAME OF PERSON</p>
              <p>Address Address.....<br />
              Colony<br />
              State-492547</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
