package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.crmassurance.entities.TaskDashboard;

public interface TaskRepository extends JpaRepository<TaskDashboard, Long> {
}
