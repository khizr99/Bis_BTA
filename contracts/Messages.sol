// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Messages{
	uint256 public messageCount=0;
	uint256 public participantCount=0;
    
	struct Mess{
		uint id;
		string author;
		string content;

	}

	struct Participant
	{
		uint id;
		string author;
	}

	mapping(uint256 => Participant) public participants;


	mapping(uint256 => Mess) public messages;

	function addParticipant(string memory _author) public
	{
	participantCount++;
	participants[participantCount]= Participant(participantCount,_author);
	}

	function addMessage(string memory _content,string memory _author) public {
	messageCount++;
	messages[messageCount] = Mess(messageCount, _author, _content);
	}


}


/*
pragma solidity ^0.8.0;

contract Messages {
    uint256 public messageCount = 0;
    uint256 public participantCount = 0;

    struct Mess {
        uint256 id;
        string author;
        string content;
    }

    struct Participant {
        uint256 id;
        string author;
    }

    mapping(uint256 => Participant) public participants;
    mapping(uint256 => Mess) public messages;

    function addParticipant(string memory _author) public {
        participantCount++;
        participants[participantCount] = Participant(participantCount, _author);
    }

    function addMessage(string memory _content, string memory _author) public {
        messageCount++;
        messages[messageCount] = Mess(messageCount, _author, _content);
    }

    function getMessage(uint256 _messageId) public view returns (uint256, string memory, string memory) {
        require(_messageId <= messageCount, "Invalid Message ID");
        Mess memory message = messages[_messageId];
        return (message.id, message.author, message.content);
    }

    function getParticipant(uint256 _participantId) public view returns (uint256, string memory) {
        require(_participantId <= participantCount, "Invalid Participant ID");
        Participant memory participant = participants[_participantId];
        return (participant.id, participant.author);
    }
}

*/