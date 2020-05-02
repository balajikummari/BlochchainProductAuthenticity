pragma solidity >=0.4.22 <0.7.0;
contract FSSAI {

    struct Product {
        string  ProductID;
        string  ProductName;        
        string  Description; 

        string  ManufacturerName; 
        string  ManufactureDate;
        string  Bestbefore;        
        string  RetailerName; 
    }

    mapping(string => Product) public Products;

    struct Complaint {
        string  ProductID;
        string  Complaint;
    }  

    mapping(string => Complaint) public Complaints;

    function CreateProduct( string memory ProductID, string memory  ProductName,        
                            string memory Description, string memory ManufacturerName, 
                            string memory ManufactureDate, string memory Bestbefore        
                            ) public {
    
        Products[ProductID] = Product(
                                ProductID,ProductName,Description,ManufacturerName,ManufactureDate,Bestbefore,""
                                );
    }

    function CreateComplaint( string memory ProductID, string memory complaint ) public{
    
        Complaints[ProductID] = Complaint( ProductID,complaint);
    }

    function AddProductToShelf( string memory ProductID, string memory RetailerName ) public{
    
        Products[ProductID].RetailerName = RetailerName;
    }

}