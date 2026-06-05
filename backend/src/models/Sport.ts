import mongoose, { Document, Schema } from 'mongoose';

export interface ISport extends Document {
  name: string;
  slug: string;
  description: string;
  icon: string;
  heroImage: string;
  color: string;
  accentColor: string;
  stats: { label: string; value: string }[];
  features: string[];
  active: boolean;
}

const SportSchema = new Schema<ISport>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    icon: { type: String, default: '🏆' },
    heroImage: { type: String },
    color: { type: String, default: '#00ff88' },
    accentColor: { type: String, default: '#0044ff' },
    stats: [{ label: String, value: String }],
    features: [{ type: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISport>('Sport', SportSchema);
