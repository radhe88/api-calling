// import React, { useState } from 'react';
// import logo from '../img/Group.png'

// const Login = () => {
//     // State variables to store login credentials and error messages
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const [error, setError] = useState('');

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check if username and password are not empty
//         if (!credentials.username || !credentials.password) {
//             setError('Please enter both username and password.');
//             return;
//         }

//         try {
//             // Perform login API call
//             const response = await fetch('https://host:port/ibmmq/rest/v1/login', {

//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     username: username.value,
//                     password: password.value
//                 }),
//             });


//             const data = await response.json();
//             if (response.ok) {
//                 setError('');
//                 alert('Login successful!'); // Replace this with your desired success action
//             } else {
//                 setError('Invalid username or password.'); // Display a generic error message for simplicity
//             }
//         } catch (error) {
//             setError('An error occurred. Please try again later.'); // Display a generic error message for any API call issues
//         }

//     };

//     // Function to handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials((prevCredentials) => ({
//             ...prevCredentials,

//             [name]: value,
//         }));

//     };

//     return (
//         <>
//             <header className='header_topper'>
//                 <div className='header_container'>
//                     <span className='footer_line'>
//                         <img src={logo} alt="#" />
//                     </span>
//                     <a href="/kitchen" className='kitchen_link page_link'>Switch to Kitchen</a>
//                     <h3 className='header_logOut'>Logout</h3>
//                 </div>
//             </header>

//             <section className="main_section">
//                 <div className="login_container">
//                     <form
//                         action=""
//                         className="ant-form ant-form-horizontal commen_ login_box"
//                         onSubmit={handleSubmit}
//                     >
//                         <h4 className="login_heading">Order Management System</h4>
//                         <div className="login_content">
//                             <h4>Log In</h4>
//                             <div className="ant-form-item input_box commen_ ant-form-item-has-success">
//                                 <div className="ant-form-item-control-input">
//                                     <div className="ant-form-item-control-input-content">
//                                         <input
//                                             type="text"
//                                             name="username"
//                                             placeholder="User ID"
//                                             id="username"
//                                             aria-required="true"
//                                             className="ant-input ant-input-status-success commen_ input_txt"
//                                             value={credentials.username}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="ant-form-item-control-input">
//                                     <div className="ant-form-item-control-input-content">
//                                         <input
//                                             type="password"
//                                             name="password"
//                                             placeholder="Password"
//                                             id="password"
//                                             aria-required="true"
//                                             className="ant-input ant-input-status-success commen_ input_txt"
//                                             value={credentials.password}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="ant-input-suffix">
//                                             <span className="ant-input-password-icon">Hide</span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             {error && <p className="error_message">{error}</p>}
//                         </div>
//                         <div className="btn_grp">
//                             <button
//                                 type="button"
//                                 className="ant-btn commen_ ant-btn-default btn_custom clear_btn"
//                             >
//                                 Clear
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="ant-btn commen_ ant-btn-default btn_custom submit_btn"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </section>
//         </>

//     );
// };

// export default Login;



// import React, { useEffect, useState } from 'react'

// import { BsSearch } from 'react-icons/bs';
// import { AiFillFilter, AiFillPlusSquare } from 'react-icons/ai';
// import { MdFilterAltOff } from 'react-icons/md';
// import { LuEdit } from 'react-icons/lu';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import axios from 'axios';
// import Newuser from './Newuser';


// const Header = () => {
//     const [posts, setPosts] = useState(() => {
//         const storedData = localStorage.getItem('data');
//         const parsedData = storedData ? JSON.parse(storedData) : [];
//         return parsedData;
//     });
//     const [modelvisible, setmodelvisible] = useState(false);
//     const showmodel = () => {
//         setmodelvisible(true);
//     }
//     const canclemodel = () => {
//         setmodelvisible(false);
//     }

//     const getData = async () => {
//         try {
//             let token = localStorage.getItem("token")
//             const headers = {
//                 "accept ": "application/json",
//                 "Authorization": token
//             };
//             let note = {
//                 "limit": 10,
//                 "page": 1
//             }
//             const response = await axios.post("/order/get", note, { headers })
//                 .then((res) => {
//                     setPosts(response.data)
//                     if (res.status === 200) {
//                         // alert(res.data.message)
//                         console.log("res", res.data);
//                         localStorage.getItem('token', res.data.data.token)
//                     } else {
//                         alert(res.data.message)
//                     }
//                 })
//         } catch (error) {
//             // if (error.response.status === 401) {
//             //     alert('Authentication Error , please enter valid Login Details !!!')
//             // } else {
//             //     alert("Something went wrong , please try again letter !!")
//             // }
//         }
//     }
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <>
//             <div>
//                 <form action="" className='ant-form ant-form-horizontal commen_  main_section'>
//                     <div className='guest_container'>
//                         <h4 className='main_heading'>
//                             Order Management System
//                         </h4>
//                         <div className='search_blog'>
//                             <div className='ant-form-item search_box commen_'>
//                                 <div className='ant-row ant-form-item-row commen_'>
//                                     <span className='class="ant-input-affix-wrapper search_input commen_'>
//                                         <span className='ant-input-prefix'>
//                                             <BsSearch />
//                                             <input type="text" name='search' placeholder='Search by keyword ' id='search' className='ant-input commen_' />
//                                         </span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div className='fliter_btn_group'>
//                                 <button type="submit" className='ant-btn commen_ ant-btn-primary go_btn round_btn'>
//                                     <span>GO</span>
//                                 </button>
//                                 <button type="submit" className='ant-btn commen_ ant-btn-default filter_btn round_btn'>
//                                     <AiFillFilter />
//                                 </button>
//                                 <button type="submit" className='ant-btn commen_ ant-btn-default non_filter_btn round_btn'>
//                                     <MdFilterAltOff />
//                                 </button>
//                                 <button onClick={showmodel} type='button' className='ant-btn commen_ ant-btn-default add_btn'>
//                                     <AiFillPlusSquare />
//                                     <span>Add</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//                 <section className='tbl_section'>
//                     <div className='tbl_container'>
//                         <div className='ant-table-wrapper conc-table commen_'>
//                             <div className='ant-spin-nested-loading commen_'>
//                                 <div className='ant-spin-container'>
//                                     <div className='ant-table'>
//                                         <div className='ant-table-container'>
//                                             <div className='ant-table-content'>
//                                                 <table>
//                                                     <thead className='ant-table-thead'>
//                                                         <tr>
//                                                             <th className='ant-table-cell' scope='col'>Table</th>
//                                                             <th className='ant-table-cell' scope='col'>Seat</th>
//                                                             <th className='ant-table-cell' scope='col'>First Name</th>
//                                                             <th className='ant-table-cell' scope='col'>Last Name</th>
//                                                             <th className='ant-table-cell' scope='col'>Type</th>
//                                                             <th className='ant-table-cell' scope='col'>1st course</th>
//                                                             <th className='ant-table-cell' scope='col'>Entree</th>
//                                                             <th className='ant-table-cell' scope='col'>Allergy</th>
//                                                             <th className='ant-table-cell action' scope='col'>
//                                                                 <span></span>
//                                                             </th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody className='ant-table-tbody'>
//                                                         {
//                                                             posts.map((client, index) => (
//                                                                 <tr key={index} className='ant-table-row ant-table-row-level-0'>
//                                                                     <td className='ant-table-cell'>{client.table_no}</td>
//                                                                     <td className='ant-table-cell'>{client.seat_no}</td>
//                                                                     <td className='ant-table-cell'>{client.first_name}</td>
//                                                                     <td className='ant-table-cell'>{client.last_name}</td>
//                                                                     <td className='ant-table-cell'>{client.type}</td>
//                                                                     <td className='ant-table-cell'>{client.course_name}</td>
//                                                                     <td className='ant-table-cell'>{client.entree_name}</td>
//                                                                     <td className='ant-table-cell'>
//                                                                         <span className='ellergy_nam'>{client.allergy}</span>
//                                                                         <span className='allergy-other'>
//                                                                             <ul>
//                                                                                 <b></b>
//                                                                             </ul>
//                                                                         </span>
//                                                                     </td>
//                                                                     <td className='ant-table-cell action'>
//                                                                         <div className='d-flex-justify'>
//                                                                             <LuEdit />
//                                                                             <RiDeleteBinLine className='deleteBtn' />
//                                                                         </div>
//                                                                     </td>
//                                                                 </tr>
//                                                             ))
//                                                         }
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {modelvisible && (
//                         <div className='modal'>
//                             <div className='modal-content'>
//                                 <div className='modal-body'>
//                                     <Newuser canclemodel={canclemodel} />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Header

// import React, { useState } from 'react';
// import axios from 'axios';
// import { AiOutlineClose } from 'react-icons/ai';

// const Newuser = ({ canclemodel, setIsModalVisible }) => {
//     // ... (existing code)

//     const addMemberDetails = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             // Create a new object containing the data to be sent to the API
//             const requestData = {
//                 fname: inputField.fname,
//                 lname: inputField.lname,
//                 type: inputField.type,
//                 seat: inputField.seat,
//                 kids: inputField.kids,
//                 course: inputField.course,
//                 entree: inputField.entree,
//                 table: inputField.table
//                 // Add other fields as needed
//             };

//             try {
//                 const response = await axios.post('/api/addGuest', requestData);
//                 // Handle the API response here (e.g., show success message)
//                 console.log(response.data);
//                 canclemodel(false);
//             } catch (error) {
//                 // Handle API error (e.g., show error message)
//                 console.error('Error adding guest:', error);
//             }
//         }
//     };

//     // ... (remaining code)

// };

// export default Newuser;

// const addMemberDetails = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//         canclemodel(false);
//     }
//     try {
//         // Fix the API call
//         const response = await axios.post('/order/add', {
//             first_name: inputField.fname,
//             last_name: inputField.lname,
//             type: inputField.type,
//             course: inputField.course,
//             entree: inputField.entree,
//             allergy: inputField.allergy,
//             table_no: parseInt(inputField.table),
//             seat_no: inputField.seat,
//         });

//         // Process the response as needed (e.g., show success message or redirect)
//         console.log(response);
//     } catch (error) {
//         // Handle errors (e.g., show error message)
//         console.error(error);
//     }

// };

// import React from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useState } from 'react';
// import axios from 'axios';

// // const Newuser = ({ canclemodel }) => {
// // const formErrors, setFormErrors = useState({});
// // const inputField, setInputField = useState({
// //     fname: '',
// //     lname: '',
// //     type: '',
// //     seat: '',
// //     kids: '',
// //     course: '',
// //     entree: '',
// //     table: ''
// // });

// const validateForm = () => {
//     let errors = {};
//     // Validate First name
//     if (inputField.fname.trim() === '') {
//         errors.fname = 'Please input first name!';
//     }
//     if (inputField.lname.trim() === '') {
//         errors.lname = 'Please input Last name!';
//     }
//     if (inputField.type.trim() === '') {
//         errors.kids = 'Please select a type!';
//     }
//     console.log(inputField);
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
// };

// const inputsHandler = (e) => {
//     e.preventDefault();
//     if (e.target.name) {
//         setInputField((prevState) => ({
//             ...prevState,

//             [e.target.name]: e.target.value,
//         }));
//     }

// };

// // const addMemberDetails = async (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //         canclemodel(false);
// //     }
// try {
//     const response = await axios.post('/order/add', {
//         first_name: inputField.fname,
//         last_name: inputField.lname,
//         type: inputField.type,
//         course: inputField.course,
//         entree: inputField.entree,
//         allergy: inputField.allergy, // Note: inputField.allergy is not used in the form fields, it may need to be added in the form if required.
//         table_no: parseInt(inputField.table),
//         seat_no: inputField.seat,
//     });
//     console.log(response); // Check the response object
//     // If the response indicates success, you can handle it accordingly (e.g., show success message or redirect)
// } catch (error) {
//     console.error(error); // Log the error for debugging
//     // Handle errors (e.g., show error message)
// }
//     };



// // export default Newuser;

// // ...
// const searchKeyword, setSearchKeyword = useState('');

// const handleSearch = () => {
//     const filteredData = data.filter((client) =>
//         client.first_name.toLowerCase().includes(searchKeyword.toLowerCase())
//     );
//     setData(filteredData);
// };

// // ...
// {/* <span className='class="ant-input-affix-wrapper search_input commen_'>
//   <span className='ant-input-prefix'>
//     <BsSearch />
//     <input
//       type="text"
//       name='search'
//       placeholder='Search by keyword '
//       id='search'
//       className='ant-input commen_'
//       value={searchKeyword}
//       onChange={(e) => setSearchKeyword(e.target.value)}
//     />
//   </span>
// </span>
// <button type="button" className='ant-btn commen_ ant-btn-primary go_btn round_btn' onClick={handleSearch}>
//   <span>GO</span>
// </button> */}
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // ... (other imports)

// const Header = () => {
//     const data, setData = useState([]);
//     const modelvisible, setmodelvisible = useState(false);
//     // ... (other state variables)

//     const searchKeyword, setSearchKeyword = useState('');

//     const handleSearch = async () => {
//         try {
//             let token = localStorage.getItem("token")
//             const headers = {
//                 "accept ": "application/json",
//                 "Authorization": token
//             };
//             let searchData = {
//                 "limit": 10,
//                 "page": 1,
//                 "searchKeyword": searchKeyword // Pass the searchKeyword in the API request
//             };

//             const response = await axios.post("/order/search", searchData, { headers });
//             setData(response.data.data.results);
//         } catch (error) {
//             // Handle error if necessary
//             console.log(error);
//         }

//     };

//     const handleClear = async () => {
//         setSearchKeyword('');
//         await getData(); // Fetch all data again to display all records
//     };

//     useEffect(() => {
//         // Implement debouncing to wait for user to stop typing before making API call
//         const timer = setTimeout(() => {
//             handleSearch();
//         }, 500); // Wait for 500 milliseconds after user stops typing

//         return () => {
//             clearTimeout(timer); // Clear the timer when the component unmounts or when the user types again
//         };

//     }, searchKeyword);

//     // ... (rest of the code)

//     return (
//         <>
//             {/ ... (other parts of the code) /}

//             <div>
//                 <form action="" className='ant-form ant-form-horizontal commen_  main_section'>
//                     <div className='guest_container'>
//                         <h4 className='main_heading'>Order Management System</h4>
//                         <div className='search_blog'>
//                             <div className='ant-form-item search_box commen_'>
//                                 <div className='ant-row ant-form-item-row commen_'>
//                                     <span className='class="ant-input-affix-wrapper search_input commen_'>
//                                         <span className='ant-input-prefix'>
//                                             <BsSearch />
//                                             <input
//                                                 type="text"
//                                                 name='search'
//                                                 placeholder='Search by keyword '
//                                                 id='search'
//                                                 className='ant-input commen_'
//                                                 value={searchKeyword}
//                                                 onChange={(e) => setSearchKeyword(e.target.value)}
//                                             />
//                                         </span>
//                                     </span>
//                                 </div>
//                             </div>
//                             {/* ... (rest of the code) */}
//                         </div>
//                     </div>
//                 </form>
//                 {/* ... (rest of the code) */}
//             </div>
//         </>

//     );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// ... (other imports)

const Header = () => {
    const data, setData = useState([]);
    const modelvisible, setmodelvisible = useState(false);
    // ... (other state variables)

    const searchId, setSearchId = useState('');

    const handleSearch = async () => {
        try {
            let token = localStorage.getItem("token")
            const headers = {
                "accept ": "application/json",
                "Authorization": token
            };

            const response = await axios.get(`/order/${searchId}`, { headers });
            setData([response.data]); // Assuming that the API returns a single record for the provided ID
        } catch (error) {
            // Handle error if necessary
            console.log(error);
        }

    };

    const handleClear = async () => {
        setSearchId('');
        await getData(); // Fetch all data again to display all records
    };

    useEffect(() => {
        // Implement debouncing to wait for user to stop typing before making API call
        const timer = setTimeout(() => {
            handleSearch();
        }, 500); // Wait for 500 milliseconds after user stops typing

        return () => {
            clearTimeout(timer); // Clear the timer when the component unmounts or when the user types again
        };

    }, searchId);

    // ... (rest of the code)

    return (
        <>
            {/ ... (other parts of the code) /}

            <div>
                <form action="" className='ant-form ant-form-horizontal commen_  main_section'>
                    <div className='guest_container'>
                        <h4 className='main_heading'>Order Management System</h4>
                        <div className='search_blog'>
                            <div className='ant-form-item search_box commen_'>
                                <div className='ant-row ant-form-item-row commen_'>
                                    <span className='class="ant-input-affix-wrapper search_input commen_'>
                                        <span className='ant-input-prefix'>
                                            <BsSearch />
                                            <input
                                                type="text"
                                                name='search'
                                                placeholder='Search by ID '
                                                id='search'
                                                className='ant-input commen_'
                                                value={searchId}
                                                onChange={(e) => setSearchId(e.target.value)}
                                            />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* ... (rest of the code) */}
                        </div>
                    </div>
                </form>
                {/* ... (rest of the code) */}
            </div>
        </>

    );
};

export default Header;

const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
};
const addMemberDetails = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        canclemodel(false); // Close the modal if the form is valid
        try {
            // Prepare the data to send in the request body
            const requestData = {
                fname: inputField.fname,
                lname: inputField.lname,
                type: inputField.type,
                seat: inputField.seat,
                kids: inputField.kids,
                course: inputField.course,
                entree: inputField.entree,
                table: inputField.table
            };

            // Make a POST request to the server with the guest details
            const response = await axios.post('/api/add-guest', requestData);

            // Handle the response from the server
            if (response.status === 200) {
                alert('Guest details added successfully!');
                // You can perform additional actions or redirects here
            } else {
                alert('Failed to add guest details. Please try again later.');
            }
        } catch (error) {
            // Handle errors that occurred during the request
            if (error.response && error.response.status === 401) {
                alert('Authentication Error: Please enter valid login details.');
            } else {
                alert('Something went wrong. Please try again later.');
            }
        }
    }

};
const addMemberDetails = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        canclemodel(false); // Close the modal if the form is valid
        try {
            // Prepare the data to send in the request body
            const requestData = {
                fname: inputField.fname,
                lname: inputField.lname,
                type: inputField.type,
                seat: inputField.seat,
                kids: inputField.kids,
                course: inputField.course,
                entree: inputField.entree,
                table: inputField.table
            };

            // Make a POST request to the server with the guest details
            const response = await axios.post('/order/add', requestData);

            // Handle the response from the server
            if (response.status === 200) {
                alert('Guest details added successfully!');
                // You can perform additional actions or redirects here
            } else {
                alert('Failed to add guest details. Please try again later.');
            }
        } catch (error) {
            // Handle errors that occurred during the request
            if (error.response && error.response.status === 401) {
                alert('Authentication Error: Please enter valid login details.');
            } else {
                alert('Something went wrong. Please try again later.');
            }
        }
    }

};

import React, { useState } from 'react';
import logo from '../img/Group.png';
import axios from 'axios';

const Login = () => {
    const credentials, setCredentials = useState({ username: '', password: '' });
    const error, setError = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.username === '' || credentials.password === '') {
            setError('Please enter both username and password.');
            return;
        } else {
            setError('');
        }

        try {
            const response = await axios.post('/login', credentials);
            if (response.status === 200) {
                console.log(response.data.message);
                localStorage.setItem('token', response.data.data.token);
                window.location = '/header';
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location = '/login'; // Redirect to the login page
    };

    return (
        <>
            <header className='header_topper'>
                <div className='header_container'>
                    <span className='footer_line'>
                        <img src={logo} alt="#" />
                    </span>
                    <a href="/kitchen" className='kitchen_link page_link'>Switch to Kitchen</a>
                    <h3 className='header_logOut' onClick={handleLogout}>Logout</h3>
                </div>
            </header>
            <section className="main_section">
                {/* ... (rest of the component) */}
            </section>
        </>
    );

};

export default Login;

import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    // State variables to store login credentials and error messages
    const credentials, setCredentials = useState({ username: '', password: '' });
    const error, setError = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.username === "" || credentials.password === "") {
            setError('Please enter both username and password.');
            return;
        } else {
            setError('');
        }
        try {
            const response = await axios.post("/login", credentials)
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.message);
                        localStorage.setItem("token", res.data.data.token);
                        window.location = '/header';
                    } else {
                        alert(res.data.message);
                    }
                });
        } catch (error) {
            if (error.response.status === 401) {
                alert("Authentication Error, Please enter valid login details !!!");
            } else {
                alert("Something Went Wrong, Please try again later !!!");
            }
        }
    };


    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    return (
        <>
            <section className="main_section">
                <div className="login_container">
                    <form
                        action=""
                        className="ant-form ant-form-horizontal commen_ login_box"
                        onSubmit={handleSubmit}
                    >
                        <h4 className="login_heading">Order Management System</h4>
                        <div className="login_content">
                            <h4>Log In</h4>
                            <div className="ant-form-item input_box commen_ ant-form-item-has-success">
                                <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="User ID"
                                            id="username"
                                            aria-required="true"
                                            className="ant-input ant-input-status-success commen_ input_txt"
                                            value={credentials.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            aria-required="true"
                                            className="ant-input ant-input-status-success commen_ input_txt"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />
                                        <span className="ant-input-suffix">
                                            <span className="ant-input-password-icon">Hide</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {error && <p className="error_message">{error}</p>}
                        </div>
                        <div className="btn_grp">
                            <button
                                type="button"
                                className="ant-btn commen_ ant-btn-default btn_custom clear_btn"
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="ant-btn commen_ ant-btn-default btn_custom submit_btn"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );

};

export default Login;