import Campaign from '../models/Campaign.js';

// @desc    Get all campaigns
// @route   GET /api/campaigns
export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Failed to load campaigns", error });
  }
};

// @desc    Get single campaign
// @route   GET /api/campaigns/:id
export const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: "Failed to load campaign", error });
  }
};

// @desc    Create a campaign
// @route   POST /api/campaigns
export const createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: "Failed to save campaign", error });
  }
};

// @desc    Update a campaign
// @route   PUT /api/campaigns/:id
export const updateCampaign = async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCampaign) return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ message: "Failed to update campaign", error });
  }
};

// @desc    Delete a campaign
// @route   DELETE /api/campaigns/:id
export const deleteCampaign = async (req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!deletedCampaign) return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete campaign", error });
  }
};
