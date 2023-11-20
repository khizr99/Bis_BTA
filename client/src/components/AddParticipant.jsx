import {ethers} from "ethers"
import "./AddParticipant.css";
const AddParticipant=({state})=>{

    const addParticipant = async(event)=>{
      event.preventDefault();
      const {contract}=state;
      const name = document.querySelector("#name").value;
      const transaction = await contract.addParticipant(name)
      await transaction.wait();
      alert("Participant is Added SuccessFully");
    }
    return  (
      <div className="center">
       <h1>Adding Participant</h1>
        <form onSubmit={addParticipant}>
          <div>
          <p>Name</p>
            <input type="text" required="required" id="name" />
            
          </div>
          <div >
            <button>Add Participant</button>
          </div>
        </form>
          
        </div>
      );
}
export default AddParticipant;

// disabled={!state.contract}