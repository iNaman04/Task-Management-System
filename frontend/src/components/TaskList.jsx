const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="text-4xl mb-3">📋</div>
        <p className="text-slate-500">No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center gap-4 transition-opacity ${
            task.status === 'completed' ? 'opacity-75' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => onToggle(task)}
            className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.status === 'completed'
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-slate-300 hover:border-indigo-500'
            }`}
            aria-label={task.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
          >
            {task.status === 'completed' && (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h4
              className={`font-medium text-slate-800 ${
                task.status === 'completed' ? 'line-through text-slate-500' : ''
              }`}
            >
              {task.title}
            </h4>
            {task.description && (
              <p className="text-sm text-slate-500 mt-1 truncate sm:whitespace-normal">
                {task.description}
              </p>
            )}
          </div>

          <span
            className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            {task.status}
          </span>

          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onEdit(task)}
              className="px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(task._id)}
              className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
