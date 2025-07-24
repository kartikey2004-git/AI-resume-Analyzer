import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6 text-gray-800">
      <div className="text-base font-medium">
        Authenticated as:{" "}
        <span className="font-semibold">{auth.user?.username}</span>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Existing Files</h3>
        <div className="flex flex-col gap-3">
          {files.length > 0 ? (
            files.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3 border p-3 rounded-md"
              >
                <p className="text-sm font-medium">{file.name}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No files available.</p>
          )}
        </div>
      </div>

      <div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
          onClick={() => handleDelete()}
        >
          Wipe App Data
        </button>
      </div>
    </div>
  );
};

export default WipeApp;
