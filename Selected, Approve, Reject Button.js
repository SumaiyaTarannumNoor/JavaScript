 <button class="btn btn-sm {% if trainee.status == 1 %}btn-purple{% else %}btn-outline-primary{% endif %}">Selected</button>
                                    <button id="approveBTN" class="btn btn-sm btn-outline-primary" onclick="updateTraineeStatus({{ trainee.trainee_id }}, true)">Approve</button>
                                    <button id="rejectBTN"class="btn btn-sm btn-outline-warning" onclick="updateTraineeStatus({{ trainee.trainee_id }}, false)">Reject</button>
                                    <script>
                                      function updateTraineeStatus(traineeId, status) {
                                          const data = {
                                              trainee_id: traineeId,
                                              status: status
                                          };
                                  
                                          fetch("/approve", {
                                              method: "POST",
                                              headers: {
                                                  "Content-Type": "application/json"
                                              },
                                              body: JSON.stringify(data)
                                          })
                                          .then(response => response.json())
                                          .then(data => {
                                              if (data.success) {
                                                  alert("Trainee status updated successfully!");
                                                  // You can update the UI here if needed
                                              } else {
                                                  alert("An error occurred: " + data.error);
                                              }
                                          })
                                          .catch(error => {
                                              console.error("Error:", error);
                                              alert("An error occurred: " + error.message);
                                          });
                                      }
                                  </script>