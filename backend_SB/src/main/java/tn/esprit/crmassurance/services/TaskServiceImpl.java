package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.TaskDashboard;
import tn.esprit.crmassurance.repositories.TaskRepository;

import java.util.List;

@Service
public class TaskServiceImpl {

    @Autowired
    private TaskRepository taskRepository;

    public TaskDashboard addTask(TaskDashboard t) {
        return taskRepository.save(t);
    }

    public List<TaskDashboard> getTasks() {
        return taskRepository.findAll();
    }

    public TaskDashboard updateTask(TaskDashboard t) {
        if (taskRepository.existsById(t.getId())) {
            return taskRepository.save(t);
        }
        return null;
    }

    public void deleteTask(TaskDashboard t) {
        taskRepository.delete(t);
    }
}
