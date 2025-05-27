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
          styles="text-sm px-2 py-1 rounded-sm"
        />
        <Button
          title="Medium - rounded-md"
          styles="text-base px-4 py-2 rounded-md"
        />
        <Button
          title="Large - rounded-full"
          styles="text-lg px-6 py-3 rounded-lg"
        />
      </div>
    </div>
  );
};
export default Landing;
