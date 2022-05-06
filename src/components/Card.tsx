const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl col-span-full sm:col-span-6 xl:col-span-4">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
