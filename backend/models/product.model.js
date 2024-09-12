const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
    productTitle:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    originalPrice:{
        type:Number,
        required:true
    },
    discountPrice:{
      type:Number,
      required:true
    },
    measurements:{
       type:String,
       required:true
    },
    //check
    color:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'',
    },
    productImages:[
        {
         type:String,

        }
    ],
    availability:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["Living Room","Bedroom","Kitchen"],
        required:true
    },
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
        },
    ]
   
   
    
})

module.exports=mongoose.model('Product',productSchema);