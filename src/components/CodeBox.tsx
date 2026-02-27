const CodeBox = () => {
  return (
    <div className="min-w-[80vw] md:min-w-lg max-w-[85vw] md:max-w-xl text-black bg-[#111724] rounded-md">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <button className="h-3 w-3 rounded-full bg-red-500" />
          <button className="h-3 w-3 rounded-full bg-yellow-400" />
          <button className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-2 text-[#7487a3]">developer.ts</div>
        </div>
        <div>
          <pre className="mt-4 text-sm font-mono text-white">
            <span className="text-purple-500">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-white">{"= {"}</span>
            <br />
            <span className="ml-4 text-white">name:</span>{" "}
            <span className="text-green-400">"Harshith Chiluka"</span>
            {", "}
            <br />
            <span className="ml-4 text-white">role:</span>{" "}
            <span className="text-green-400">"Full-Stack Developer"</span>
            {", "}
            <br />
            <span className="ml-4 text-white">stack:</span> {"["}
            <span className="text-green-400">"Node.js", "TypeScript"</span>
            {"]"}
            {", "}
            <br />
            <span className="ml-4 text-white">passion:</span>{" "}
            <span className="text-green-400">"Building scalable apps"</span>
            {", "}
            <br />
            <span className="text-white">{"};"}</span>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default CodeBox;
