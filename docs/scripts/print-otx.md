# OTx Report (Inpatient)

## Overview

Welcome to the OTx Report (Inpatient) Test Script.

## Procedure

1. **Login** - Use your assigned credentials.
  * If you cannot find an activity on the toolbar, use Chart search (CTRL + space) in the right hand corner.
2. Click on the Hospital Chart icon on the toolbar.
3. Enter your TDR test patient's name in the Name/MRN field, then click the Find Patient button.
*image here*
4. Select the admission by double clicking on the row for the department you are currently testing.
*image here*
5. Navigate to the Manage Orders activity.
*image here*
  1. Go to the search bar on the right side of the screen, search for "AHS IP TDR" and open the order set.
  2. Click past the warning that htis order set is test released.
  *image here*
  *image here*
  3. Sign the orders
    1. If any required fields pop up, fill them out and click sign.
    *image here*
  4. If you receive a warning about allergies not being filed, click Allergies in the patient header.
  *image here*
    1. Select "No Known Allergies" then mark as Reviewed.
  5. Override any medication warnings that appear for this patient.
  *image here*
  6. If it asks for a  provider, click on the Ordering provider box and select a name.
  *image here*
6. Release transfuse RBC order.
  1. Navigate to the Flow Sheets activity.
  2. Search "Blood" in the search bar to the right.
  3. Select flowsheet 31030 (IP Core Blood Admin with Vital Signs), click accept to open it.
  4. Select the "Transfusion Release Report" button to the left
  *image here*
  5. Release the transfusion order.
  *image here*

## Outcome

* Ensure the following print outs have printed at the appropriate location:
  * Transfuse RBC: Pat Dept Printer and Pat Blood Bank Printer
  * General Supply: Pat Supply Printer
  * Crutches: Pat Dept Printer
  * Morphine: Pat Rx Printer
* If you do not see any orders print:
  * Select the order from Order History - copy and paste the Order # into the Test Case comments.