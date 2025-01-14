const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary').v2;
const { ethers } = require("ethers");

require("dotenv").config();

// Simple Cloudinary configuration
cloudinary.config({
    cloud_name: 'marvelouse-agency-of-support',
    api_key: '455723237167783',
    api_secret: 'EBn5oevs8bEBCLj6J5_UdtPhGmk'
});

module.exports = {
    generateETHWallet: () => {
        try {
            const wallet = ethers.Wallet.createRandom();
            return {
                address: wallet.address,
                privateKey: wallet.privateKey
            };
        } catch (error) {
            console.error("Error generating ETH wallet:", error);
            throw error;
        }
    },
    getImageUrl: async (files) => {
        try {
            if (!files || files.length === 0) {
                throw new Error("No files provided");
            }
            const result = await cloudinary.uploader.upload(files[0].path, {
                resource_type: "auto",
            });
            return result.secure_url;
        } catch (error) {
            console.error("Error uploading to Cloudinary:", error);
            throw error;
        }
    },

    getImageUrls: async (files) => {
        try {
            let urls = [];
            for (let i = 0; i < Math.min(files.length, 9); i++) {
                const result = await cloudinary.uploader.upload(files[i].path, {
                    resource_type: "auto"
                });
                urls.push(result.secure_url);
            }
            return urls;
        } catch (error) {
            console.error("Error uploading images:", error);
            throw error;
        }
    },

    getSecureUrl: async (base64) => {
        try {
            const result = await cloudinary.uploader.upload(base64);
            return result.secure_url;
        } catch (error) {
            console.error("Error uploading base64 image:", error);
            throw error;
        }
    }
};
