export const Rencana = () => {
  return (
    <div className="flex items-center gap-2 text-xs bg-ide-second text-ide-primary w-max px-2 py-1 rounded-full font-medium">
      <span className="inline-block w-3 h-3 rounded-full bg-ide-primary"></span>
      <p>Rencana</p>
    </div>
  );
};

export const Process = () => {
  return (
    <div className="flex items-center gap-2 text-xs bg-process-second text-process-primary w-max px-2 py-1 rounded-full font-medium">
      <span className="inline-block w-3 h-3 rounded-full bg-process-primary"></span>
      <p>Proses</p>
    </div>
  );
};

export const Finish = () => {
  return (
    <div className="flex items-center gap-2 text-xs bg-finish-primary-second text-finish-primary w-max px-2 py-1 rounded-full font-medium">
      <span className="inline-block w-3 h-3 rounded-full bg-finish-primary-primary"></span>
      <p>Finish</p>
    </div>
  );
};
