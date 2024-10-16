const express = require('express');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"public/images")
    },
    filename : function(req, file, cb){
        cb(null,file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const fileType = /jpg|png|jpeg|svg/
    const result = fileType.test(path.extname(file.originalname))
    if(result){
        cb(null,true)
    }
    else{
        cb("Plz upload correct format")
    }
}

const upload = multer({
   storage : storage,
   fileFilter :  fileFilter,
   limits : {
    fileSize : 1000000
   }
}).single('file')


const FileUpload = async(req,res) => {
    upload(req,res,(err) => {
        if(err){
            return res.status(500).json(err);
        }
        else{
            return res.status(201).json("Image is uploaded")
        }
    })
    // return res.status(200).json("sdfsd")
}

exports.GetData = FileUpload;