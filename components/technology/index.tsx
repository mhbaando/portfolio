const Technology = ({ techName }: { techName: string }) => {
  return (
    <div className="bg-[#19191B] text-white rounded-full px-5 py-1">
      <p className="text-sm">{techName}</p>
    </div>
  );
};
export default Technology;
