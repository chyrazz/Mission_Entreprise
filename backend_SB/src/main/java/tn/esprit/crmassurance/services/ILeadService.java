package tn.esprit.crmassurance.services;

import tn.esprit.crmassurance.entities.User;

import java.util.List;

public interface ILeadService {
    public User GetLeadByID(Long id);
    public List<User> GetAllLeads();
    public User AddNewLead(User l);
    public void DeleteLead(User lead);
    public void UpdateLeadDetails(User newLead);
}
