import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LOREM } from "@/lib/utils";

export const Features = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-4xl font-extrabold">Features</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Territory War Tracking
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Territory Battle Tracking
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Raid Tracking
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Raid Ticket Tracking
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Guild Activity Tracking
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
        <Card className="shadow-inner transition duration-300 hover:scale-105">
          <CardHeader className="text-2xl font-semibold">
            Recruiting Portal
          </CardHeader>
          <CardContent>{LOREM}</CardContent>
        </Card>
      </div>
    </div>
  );
};
