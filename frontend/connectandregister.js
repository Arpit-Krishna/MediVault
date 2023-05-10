
const HealthRecordAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Patient",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "pid",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "patientName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "gender",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "phNo",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "bloodType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Records",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "pid",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hospitalName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "doctorName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "speciality",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "referredBy",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "complaints",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "investigatinAdvise",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "medicineAdvice",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getpid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_patientName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_phNo",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_bloodType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_location",
                "type": "string"
            }
        ],
        "name": "insertPatient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_hospitalName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_doctorName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_speciality",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_referredBy",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_complaints",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_investigatinAdvise",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medicineAdvice",
                "type": "string"
            }
        ],
        "name": "insertRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const HealthRecordAddress = "0x92b5ed7D0e7762440C41Ec5740d45c7A308291ae";

async function connectWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log("Connected to account address:", await signer.getAddress());
}


async function addpatient() {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const element1 = document.getElementById('patient-name');
  const element2 = document.getElementById('age');
  const element3 = document.getElementById('gender');
  const element4 = document.getElementById('mobile-num');
  const element5 = document.getElementById('blood-type');
  const element6 = document.getElementById('location');

  const patientName = element1.value;
  const Age = element2.value;
  const Gender = element3.value;
  const mobilenum = element4.value;
  const bloodType = element5.value;
  const location = element6.value;

  const patientContract = new ethers.Contract(HealthRecordAddress, HealthRecordAbi, provider);
  const p1=patientContract.connect(signer);
  const patient = await p1.insertPatient(patientName, Age, Gender, mobilenum, bloodType, location);
  await patient.wait();

  const HealthRecordContract = new ethers.Contract(HealthRecordAddress, HealthRecordAbi, provider);
  const id= await HealthRecordContract.getpid()
  alert(id-1);
  console.log(id);
}