import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-2 p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex space-x-2">
        <Button
          title="Small - rounded-sm"
          className="text-sm px-2 py-1 rounded-sm"
        />
        <Button
          title="Medium - rounded-md"
          className="text-base px-4 py-2 rounded-md"
        />
        <Button
          title="Large - rounded-full"
          className="text-lg px-6 py-3 rounded-full"
        />
      </div>
    </div>
  );
};
export default Landing;
