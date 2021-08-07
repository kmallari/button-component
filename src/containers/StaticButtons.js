import Button from "../components/Button";
import "./App.css";

function StaticButtons() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-sans font-bold text-3xl mt-20 mb-6">Buttons</h1>
      <div className="grid gap-5 grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-6 md:gap-10">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button />`}</h2>
          <Button shadow={true} color="default"/>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button variant="outline" />`}</h2>
          <Button variant="outline" size="md" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button variant="text" />`}</h2>
          <Button variant="text" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button disableShadow />`}</h2>
          <Button shadow={false} color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button disabled />`}</h2>
          <Button disabled={true} />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button variant="text" disabled />`}</h2>
          <Button variant="text" disabled={true} />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button variant="outline" disabled />`}</h2>
          <Button variant="outline" disabled={true} />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button startIcon="cart" />`}</h2>
          <Button iconKey="cart" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button startIcon="cold" />`}</h2>
          <Button iconKey="ac" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button startIcon="account" />`}</h2>
          <Button iconKey="account" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button startIcon="apps" />`}</h2>
          <Button iconKey="apps" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button startIcon="camera" />`}</h2>
          <Button iconKey="cam" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button endIcon="cart" />`}</h2>
          <Button iconKey="cart" color="primary" iconPos="right" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button endIcon="cold" />`}</h2>
          <Button iconKey="ac" color="primary" iconPos="right" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button endIcon="account" />`}</h2>
          <Button iconKey="account" color="primary" iconPos="right" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button endIcon="apps" />`}</h2>
          <Button iconKey="apps" color="primary" iconPos="right" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button endIcon="camera" />`}</h2>
          <Button iconKey="cam" color="primary" iconPos="right" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button size="small" />`}</h2>
          <Button size="sm" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button size="medium" />`}</h2>
          <Button size="md" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button size="large" />`}</h2>
          <Button size="lg" color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button color="primary" />`}</h2>
          <Button color="primary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button color="default" />`}</h2>
          <Button color="default" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button color="secondary" />`}</h2>
          <Button color="secondary" />
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-mono font-normal">{`<Button color="danger" />`}</h2>
          <Button color="danger" />
        </div>
      </div>
    </div>
  );
}

export default StaticButtons;
