import {Button} from '../src/components/ui/button';
import {Card, CardHeader, CardTitle} from '../src/components/ui/card';

export default function Home() {
  return (
    <div className="item-center">
      <Card className="max-w-sm mx-auto mt-10">
        <CardHeader>
          <CardTitle>Welcome to the App</CardTitle>
          <p>This is a simple application demonstrating the use of components.</p>
          <Button>Get Started</Button>
          <Button className='bg-white text-black-500 hover:bg-gray-200 border'>Learn More</Button>
        </CardHeader>
      </Card>
    </div>
  );
}
