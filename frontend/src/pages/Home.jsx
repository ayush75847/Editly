import React, { useState } from 'react';
import Navbar from '../components/Navbar/';
import Select from 'react-select'
import { api_base_url } from '../helper';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]);

  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = useState(null);

  const [name, setName] = useState("");

  const customStyles = {
    container: (base) => ({
      ...base,
      width: "100%",
    }),

    control: (base, state) => ({
      ...base,
      backgroundColor: "#1c1c1e",
      borderColor: state.isFocused ? "#3a7afe" : "transparent",
      minHeight: "48px",
      borderRadius: "8px",
      padding: "4px",
      boxShadow: state.isFocused ? "0 0 0 1px #3a7afe" : "none",
      "&:hover": { borderColor: "#3a7afe" },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#1c1c1e",
      border: "1px solid #2b2b2b",
      borderRadius: "8px",
      marginTop: "5px",
    }),

    singleValue: (base) => ({
      ...base,
      color: "white",
    }),

    input: (base) => ({
      ...base,
      color: "white",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3a7afe"
        : state.isFocused
          ? "#2b2b2b"
          : "#1c1c1e",
      color: "white",
      padding: "10px",
      cursor: "pointer",
    }),
  };

  const getRunTimes = async () => {
    let res = await fetch("https://emkc.org/api/v2/piston/runtimes");
    let data = await res.json();

    const python = data.find(r => r.language === "python");
    const js = data.find(r => r.language === "javascript");
    const c = data.find(r => r.language === "c");
    const cpp = data.find(r => r.language === "c++");
    const java = data.find(r => r.language === "java");
    const bash = data.find(r => r.language === "bash");

    setOptions([
      { value: "python", label: `Python (${python.version})`, version: python.version },
      { value: "javascript", label: `JavaScript (${js.version})`, version: js.version },
      { value: "c", label: `C (${c.version})`, version: c.version },
      { value: "cpp", label: `C++ (${cpp.version})`, version: cpp.version },
      { value: "java", label: `Java (${java.version})`, version: java.version },
      { value: "bash", label: `Bash (${bash.version})`, version: bash.version }
    ]);
  };


  // Handler for selecting a language
  const handleLangChange = (option) => {
    setSelectedLang(option);
    //console.log("Selected Language:", option);
  };

  const [projects, setProjects] = useState(null);

  //create project api call
  const createProj = () => {
    fetch(api_base_url + "/createProject", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        projLanguage: selectedLang.value,
        token: localStorage.getItem("token"),
        version: selectedLang.version
      })
    }).then(res => res.json()).then(data => {
      if (data.success === true) {
        setIsCreateModelShow(false);
        setName("");
        setSelectedLang(null);
        navigate("/editor/" + data.projectId);
      }
      else {
        toast.error(data.msg);
      }
    }).catch(err => {
      console.error("Error creating project:", err);
    });
  };

  // to get projects from database
  const getProjects = async () => {
    fetch(api_base_url + "/getProjects", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem("token")
      })
    }).then(res => res.json()).then(data => {
      console.log(data);
      if (data.success === true) {
        setProjects(data.projects);
      }
      else {
        toast.error(data.msg);
      }
    })
  };

  const [isEditModelShow, setIsEditModelShow] = useState(false);

  const deleteProject = (id) => {
    let isConfirm = confirm("Are you sure you want to delete this project?");
    if (isConfirm) {
      fetch(api_base_url + "/deleteProject", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
          projectId: id
        })
      }).then(res => res.json()).then(data => {
        if (data.success === true) {
          toast.success(data.msg);
          getProjects();
        }
        else {
          toast.error(data.msg);
        }
      });
    }
  }

  const [editProjectId, setEditProjectId] = useState("");

  const updateProj = () => {
    fetch(api_base_url + "/editProject", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        projectId: editProjectId,
        name: name
      })
    }).then(res => res.json()).then(data => {
      if (data.success === true) {
        setIsEditModelShow(false);
        setName("");
        setEditProjectId("");
        getProjects();
      }
      else {
        toast.error(data.msg);
      }
    });
  };

  const [userName, setUserName] = useState("User");

  const getUserInfo = async () => {
  fetch(api_base_url + "/getUserInfo", {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: localStorage.getItem("token")
    })
  }).then(res => res.json()).then(data => {
    if (data.success === true) {
      setUserName(data.user.name);
    }
  }).catch(err => {
    console.error("Error fetching user info:", err);
  });
};

  React.useEffect(() => {
    getRunTimes();
    getProjects();
    getUserInfo();
  }, []);


  return (
    <>
      <Navbar />
      <div className='flex items-center px-[100px] justify-between mt-5'>
        <h3 className='text-2xl'>Hi, {userName}</h3>

        <div className='flex items-center '>
          <button onClick={() => setIsCreateModelShow(true)} className="bg-[#3a7afe] text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-[#4c8aff]">
            Create Project
          </button>
        </div>
      </div>

      <div className="projects px-[100px] mt-5 pb-10">
        {
          projects && projects.length > 0 ? projects.map((project, index) => {
            return <>
              <div className="project w-full p-[15px] flex items-center justify-between bg-[#0f0e0e] rounded-md">
                <div onClick={() => { navigate("/editor/" + project._id) }} className='flex w-full items-center gap-[15px]'>
                  {
                    project.projLanguage === "python" ?
                      <>
                        <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/JsvPWamWJRzlmmi8fJD_GRBBzXKn1duORQkN_Vhv-kE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LnN2Z2Nkbi5jb20v/ZGV2aWNvbi9weXRo/b24tb3JpZ2luYWwu/c3Zn" alt="img" />
                      </>
                      : project.projLanguage === "javascript" ?
                        <>
                          <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/7t_jR7sY58dEIBGI4C4JZnTqaRgyhrzx7P4seOnBtEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvamF2YXNj/cmlwdC1sb2dvLXBu/Z19zZWVrbG9nby0z/MzA1NDEucG5n" alt="img" />
                        </>
                        : project.projLanguage === "cpp" ?
                          <>
                            <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/rCythyv8ljI73TpJao23_cgxMIFDVRyKoN7ESQNVolo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/MS9jLWJyYW5kbG9n/by5uZXRfLTUxMng1/MTIucG5n" alt="img" />
                          </>
                          : project.projLanguage === "c" ?
                            <>
                              <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/xJACZkuoSeRzpS0sA-vxe6c_uzbXSZN00ROKXyrBHs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9jLXByb2dy/YW0taWNvbi5wbmc" alt="img" />
                            </>
                            : project.projLanguage === "java" ?
                              <>
                                <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/tIM4RhHWu4bhWYZrErAavKFCLWf3MeevtU9moq5CCXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9qYXZhLXBy/b2dyYW1taW5nLWxh/bmd1YWdlLWljb24u/cG5n" alt="img" />
                              </>
                              : project.projLanguage === "bash" ?
                                <>
                                  <img className='w-[50px] h-[auto] object-cover' src="https://imgs.search.brave.com/f8-pur4SGqSADyxfBmClQ2RPKMuqwsvhw0thv5IGKMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC9hMWRhNTIyZDBh/MzA1N2ExYmMzZmI0/MTFmY2JiZjU3YTQ0/N2MxMTQ2LzY1ZTcx/L2ltZy9zeW1ib2wv/c3ZnL2Z1bGxfY29s/b3JlZF9kYXJrLnN2/Zw" alt="img" />
                                </>
                                :
                                ""

                  }

                  <div>
                    <h3 className='text-xl'>{project.name}</h3>
                    <p className='text-[14px] text-[gray]'>{new Date(project.date).toDateString()}</p>
                  </div>
                </div>
                <div className='flex items-center gap-[15px]'>
                  <button onClick={() => {
                    setIsEditModelShow(true);
                    setEditProjectId(project._id);
                    setName(project.name);
                  }} className="bg-[#3a7afe] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-[#4c8aff]">
                    Edit
                  </button>
                  <button onClick={() => deleteProject(project._id)} className="bg-[#ff4c4c] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-[#ff6666]">
                    Delete
                  </button>
                </div>
              </div>

            </>
          }) : "No Projects Found!"
        }
      </div>

      {isCreateModelShow && (
        <div onClick={(e) => {
          if (e.target.classList.contains("modelCon")) {
            setIsCreateModelShow(false);
            setName("");
          }
        }} className="modelCon flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="modelBox flex flex-col rounded-xl p-6 w-[25vw] h-[40vh] bg-[#0f0e0e]">

            {/* Header */}
            <h3 className='text-xl mb-5 font-semibold text-center'>Create New Project</h3>

            {/* Project Name Input */}
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full p-3 mb-4 rounded-md bg-[#1c1c1e] outline-none border-none text-white'
              type="text"
              placeholder='Project Name'
            />

            {/* Language Select */}
            <Select
              options={options}
              styles={customStyles}
              placeholder="Select a Language"
              value={selectedLang}
              onChange={handleLangChange}
            />

            {/* Push button to bottom */}
            <button
              className="bg-[#3a7afe] text-white px-6 py-2 rounded-md mt-auto self-end hover:bg-[#4c8aff] font-semibold"
              onClick={() => {
                if (!selectedLang) return alert("Select a language first!");
                if (!name) return alert("Enter project name!");
                createProj();
              }}
            >
              Create Project
            </button>

          </div>
        </div>
      )}

      {isEditModelShow && (
        <div onClick={(e) => {
          if (e.target.classList.contains("modelCon")) {
            setIsEditModelShow(false);
            setName("");
            setEditProjectId("");
          }
        }} className="modelCon flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="modelBox flex flex-col rounded-xl p-6 w-[25vw] h-[40vh] bg-[#0f0e0e]">

            {/* Header */}
            <h3 className='text-xl mb-5 font-semibold text-center'>Update Project</h3>

            {/* Project Name Input */}
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full p-3 mb-4 rounded-md bg-[#1c1c1e] outline-none border-none text-white'
              type="text"
              placeholder='Project Name'
            />
            <button
              className="bg-[#3a7afe] text-white px-6 py-2 rounded-md mt-auto self-end hover:bg-[#4c8aff] font-semibold"
              onClick={() => {
                if (!name || name.trim() === "") {
                  return alert("Enter project name!");
                }
                updateProj();
              }}
            >
              Update Project
            </button>

          </div>
        </div>
      )}

    </>
  )
}

export default Home