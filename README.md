# AI-Workflow-AI-in-Production
AI Workflow: AI in Production
# AI Workflow – Questions & Peer Review Checklist

---

# 🧪 Quiz Answers

## Question 1
**Which features must be provided as input (minimum) for the Flask prediction API?**

**Answer:**  
✅ The target date and country  

**Explanation:**  
These inputs allow the system to:
- Identify *when* to predict (target date)
- Identify *where* to predict (country)

The model can then internally fetch or engineer the necessary historical features.

---

## Question 2
**True/False: Unit testing and novelty detection provide an automated mechanism to monitor model performance**

**Answer:**  
❌ False  

**Explanation:**  
- Unit testing checks correctness of code, not model performance  
- Novelty detection identifies unusual inputs, not prediction accuracy or drift  

---

## Question 3
**Which aspect contributes the least to template re-usability?**

**Answer:**  
❌ Having an HTML endpoint for dashboards  

**Explanation:**  
- Dashboards are helpful but not essential for reuse  
- Core reusable components include modular code, testing, and version control  

---

# ✅ AI Workflow Peer Review Checklist

This checklist evaluates whether an AI/ML solution is production-ready.

---

## 1. Testing & Reliability

### API Unit Tests
- Test endpoints (e.g., `/predict`)
- Validate inputs, outputs, and error handling  

### Model Unit Tests
- Verify prediction shapes and types  
- Ensure model loads and runs consistently  

### Logging Unit Tests
- Confirm logs are written correctly  
- Validate error and prediction logging  

### Test Execution
- All tests run with one command:
  ```bash
  pytest
