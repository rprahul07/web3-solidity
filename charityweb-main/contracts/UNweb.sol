// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract UNweb {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaings;

    uint256 public numberOfCampaings = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaings[numberOfCampaings];

        require(
            _deadline < block.timestamp,
            "the deadline should be in the future"
        );

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaings++;

        return numberOfCampaings - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaings[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaings[_id].donators, campaings[_id].donations);
    }

    function getCampaigs() public view returns (Campaign[] memory) {
        Campaign[] memory allCampains = new Campaign[](numberOfCampaings);
        for (uint256 i = 0; i < numberOfCampaings; i++) {
            Campaign storage item = campaings[i];

            allCampains[i] = item;
        }
        return allCampains;
    }
}
