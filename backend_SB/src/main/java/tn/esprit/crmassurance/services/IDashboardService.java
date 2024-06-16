package tn.esprit.crmassurance.services;

public interface IDashboardService {

    //Dashboard Contrat
    public int getTotalContrats();
    public int getContratsResilies();
    public int getContratsRenouveles();
    public int getContratsCreatedByMonth();

    //Dashboard Lead+Client
    //Add boolean attribute in order to implement this method
    //public int getConversionRate();

    //Dashboard Support
    public int getRequestInProgress();
    public int getRequestEscalated();
    public int getRequestResolved();
    public int getRequestSuspended();
    public int getRequestOpen();
    //à vérifier
    //public int getRating();

    //Dashboard Performance
    public int getTicketsHandled();
    public int getContractsHandledByCommercial();
    public int getOpportunitiesHandled();

}
