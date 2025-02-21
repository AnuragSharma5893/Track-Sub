import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be greater than 0"],
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP"],
        default: 'USD'
    }, 
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
        default: "monthly",
    }, 
    category: {
        type: String, 
        enum: ["food", "transport", "utilities", "rent", "other"],
        required: [true, "Category is required"],
    }, 
    paymentMethod: {
        type: String,
        enum: ["credit card", "paypal", "cash"],
        required: [true, "Payment method is required"],
    }, 
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    }, 
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: function(v) {
                return v < new Date();
            },
            message: "Start date must be in the past",
        }
    },
    renewalDate: {
        type: Date,
        required: [true, "Renewal date is required"],
        validate: {
            validator: function(v) {
                return v > this.startDate;
            },
            message: "Renewal date must be after start date",
        }
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
        index: true,
    }

}, { timestamps: true });

subscriptionSchema.pre("save", function(next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    // Auto update the status if renewal date has passed
    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }
    next();
});

const Subscription = mongoose.model("subscription", subscriptionSchema);
export default Subscription;