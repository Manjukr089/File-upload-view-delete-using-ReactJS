import { useState } from 'react';
import './styles/Saltoris.css';

const Saltoris = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleDeleteClick = () => {
        setSelectedFile(null);
    };

    return (
        <div className="salto_home">
            <h1>Meter Reading Inspection Report</h1>
            <form action="" className="form-group">
                <div className="first"  >
                    <div className="one">
                        <label htmlFor="Consumer Name">Consumer Name</label><br />
                        <input type="text" placeholder="Ramakrishna murthy" /><br />

                        <label htmlFor="Address">Address</label><br />
                        <input type="text" placeholder="Address" /><br />

                        <label htmlFor="Premise Type">Premise Type</label>
                        <input type="text" placeholder="With Stab" />
                    </div>

                    <div className="two">
                        <label htmlFor="Date of Submission of Report">Date of Submission of Report</label><br />
                        <input type="date" value="2023-08-17" /><br />

                        <label htmlFor="Date of Visit">Date of Visit</label><br />
                        <input type="date" value="2023-08-17" /><br />

                        <label htmlFor="Total Family Members/Dwelling Units">Total Family Members/Dwelling Units</label><br />
                        <input type="number" placeholder="4" />
                    </div>
                </div>

                <div className="second" >
                    <div className="second_one"><label htmlFor="Any Other Connection found in Site">Any Other Connection found in Site</label><br />
                        <label for="html">Yes</label>
                        <input type="radio" name="yes" />

                        <label for="html">No</label>
                        <input type="radio" name="yes" />
                    </div>

                    <div className="second_two">
                        <label htmlFor="Remark">Remark</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="second_second">
                    <div className="second_third">
                        <label htmlFor="Alternate Source of Water">Alternate Source of Water</label><br />
                        <label for="html">Yes</label>
                        <input type="radio" name="yes" />
                        <label for="html">No</label>
                        <input type="radio" name="yes" />
                    </div>

                    <div className="second_forth">
                        <label htmlFor="Remark">Remark</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="third">
                    <div className="third_one">
                        <label htmlFor="Nearby Contract Account No.">Nearby Contract Account No.</label><br />
                        <input type="number" placeholder="47453298" /><br />

                        <label htmlFor="Zone">Zone</label><br />
                        <input type="text" placeholder="Laxmi Nagar" /><br />
                    </div>

                    <div className="third_two">
                        <label htmlFor="Meter Reader Name">Meter Reader Name</label><br />
                        <input type="text" placeholder="Mr.Nagarjun" /><br />

                        <label htmlFor="Zone No.">Zone No.</label><br />
                        <input type="number" placeholder="2" /><br />
                    </div>
                </div>
                <label htmlFor="Remark" style={{ margin: '20px 0px 50px 40px' }}>Remark</label><br />
                <textarea name="" id="" cols="188" rows="4" placeholder='EveryThing OK' style={{ margin: '0px 35px' }}></textarea>

            </form>
            <div className="ending">
                <h4 style={{ margin: '20px 40px' }}>Meter Reader Signature</h4>
                <div className="file-upload">
                    <label htmlFor="file-input" style={{ backgroundColor: ' rgb(75, 109, 201)', color: 'white', padding: '10px', margin: '10px 0px 10px 200px', borderRadius: '10px' }} >
                        <i className="fas fa-upload" ></i> Upload Document
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx, .jpg, .png"
                        style={{ display: 'none' }}
                    />
                    {selectedFile && (
                        <span className="file-name" style={{ margin: '10px 10px' }}>{selectedFile.name}</span>
                    )}

                </div>
                <div className="file-actions">
                    {(
                        <button onClick={() => window.open(URL.createObjectURL(selectedFile))}>
                            <i id='view' className="fas fa-eye" ></i>
                        </button>
                    )}
                    {(
                        <button onClick={handleDeleteClick}>
                            <i id="trash" className="fas fa-trash" aria-hidden="true" ></i>
                        </button>
                    )}
                </div>
            </div>
            <div className="footer" >
                <button>Action</button>
            </div>
        </div>
    );
};

export default Saltoris;
