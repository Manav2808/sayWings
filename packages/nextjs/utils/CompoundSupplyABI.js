export const CompoundSupplyABI = [
    {
        "inputs": [],
        "name": "baseIndexScale",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseMinForRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseScale",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseTokenPriceFeed",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseTrackingBorrowSpeed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseTrackingSupplySpeed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "i",
                "type": "uint8"
            }
        ],
        "name": "getAssetInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint8",
                        "name": "offset",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "priceFeed",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "scale",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "borrowCollateralFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "liquidateCollateralFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "liquidationFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "supplyCap",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct CometStructs.AssetInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "getAssetInfoByAddress",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint8",
                        "name": "offset",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "priceFeed",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "scale",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "borrowCollateralFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "liquidateCollateralFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "liquidationFactor",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "supplyCap",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct CometStructs.AssetInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "utilization",
                "type": "uint256"
            }
        ],
        "name": "getBorrowRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "priceFeed",
                "type": "address"
            }
        ],
        "name": "getPrice",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "utilization",
                "type": "uint256"
            }
        ],
        "name": "getSupplyRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUtilization",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numAssets",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "supply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalBorrow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalsBasic",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "baseSupplyIndex",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "baseBorrowIndex",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "trackingSupplyIndex",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "trackingBorrowIndex",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint104",
                        "name": "totalSupplyBase",
                        "type": "uint104"
                    },
                    {
                        "internalType": "uint104",
                        "name": "totalBorrowBase",
                        "type": "uint104"
                    },
                    {
                        "internalType": "uint40",
                        "name": "lastAccrualTime",
                        "type": "uint40"
                    },
                    {
                        "internalType": "uint8",
                        "name": "pauseFlags",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct CometStructs.TotalsBasic",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "totalsCollateral",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "totalSupplyAsset",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "_reserved",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct CometStructs.TotalsCollateral",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userBasic",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "int104",
                        "name": "principal",
                        "type": "int104"
                    },
                    {
                        "internalType": "uint64",
                        "name": "baseTrackingIndex",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "baseTrackingAccrued",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "assetsIn",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint8",
                        "name": "_reserved",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct CometStructs.UserBasic",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userCollateral",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint128",
                        "name": "balance",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "_reserved",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct CometStructs.UserCollateral",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];