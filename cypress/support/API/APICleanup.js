let patientsToDelete = [];

class APICleanup {
  getPatientsToDelete() {
    return patientsToDelete;
  }

  registerPatientForCleanup(patientId) {
    patientsToDelete.push(patientId);
  }

  resetToPatientsToDeleteCounters() {
    patientsToDelete = [];
  }
}
export default new APICleanup();