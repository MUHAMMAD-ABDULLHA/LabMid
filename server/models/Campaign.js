import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  campaignName: { type: String, required: true },
  description: { type: String, required: true },
  objectives: { type: String, required: true },
  overallBudget: { type: Number, required: true },
  dailySpend: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  demographics: { type: String },
  hasHistoricalData: { type: Boolean, default: false },
  historicalDataDetails: { type: String },
  keyMessages: { type: String, required: true },
  cta: { type: String, required: true },
  specificOffers: { type: String },
  enableAR: { type: Boolean, default: false },
  enableVoice: { type: Boolean, default: false },
  multiStepForm: { type: Boolean, default: false },
  personalizedLanding: { type: Boolean, default: false },
  campaignStatus: { type: String, enum: ['draft', 'launch'], required: true },
  kpis: [{ type: String }],
  createdBy: { type: String, required: true } // used to filter campaigns by user email
}, { timestamps: true });

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;
