const steps = [
  { id: 1, title: "Time & Place" },
  { id: 2, title: "Moto" },
  { id: 3, title: "Details" },
  { id: 4, title: "Checkout" },
  { id: 5, title: "Done" },
];
function Steps () {
  return <>
  <div className="p-8 bg-gray-100 text-center mt-14">
      <h2 className="text-2xl font-bold mb-2">How it works</h2>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!
      </p>

      <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto flex-wrap">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center font-bold">
                {step.id < 10 ? `0${step.id}` : step.id}
              </div>
              <span className="mt-2 text-sm">{step.title}</span>
            </div>
            {index !== steps.length - 1 && (
              <div className="w-10 md:w-16 h-0.5 bg-blue-500 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
}
export default Steps