import mongoose, { Document, Schema } from 'mongoose';

export interface ICoach extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  specialization: string[];
  experience: number;
  bio: string;
  avatar: string;
  certifications: string[];
  rating: number;
  totalReviews: number;
  active: boolean;
}

const CoachSchema = new Schema<ICoach>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    specialization: [{ type: String }],
    experience: { type: Number, default: 0 },
    bio: { type: String },
    avatar: { type: String },
    certifications: [{ type: String }],
    rating: { type: Number, default: 5.0, min: 0, max: 5 },
    totalReviews: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICoach>('Coach', CoachSchema);
