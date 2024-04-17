function AddItem()
{
    // Create an Option object       
    var opt = document.createElement("option");        

    // Assign text and value to Option object
    opt.text = "New Value";
    opt.value = "New Value";

    // Add an Option object to Drop Down List Box
    document.getElementById('MainContent_ddlFilterBooleanOption').options.add(opt);
}

AddItem()