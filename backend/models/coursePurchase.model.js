import mongoose from "mongoose";
const CoursePurchaseSchema = new mongoose.Schema9({
    courseId: {
        type: mongoose.Schmea.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    userId: {
        type: mongoose.Schmea.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentId: {
        type: String,
        required: true
    }


}, {timestamps: true});

export const CoursePurchase = mongoose.model('CoursePurchase', CoursePurchaseSchema)
