global class ContactMeController {

    @AuraEnabled // to be available via JS
    public static void createLead(String firstname, String lastname, String company, String email, String description){
        Lead newLead = new Lead();

        newLead.FirstName = firstname;
        newLead.LastName = lastname;
        newLead.Email = email;
        newLead.Company = company;
        newLead.Description = description;

        insert newLead;
    }
}