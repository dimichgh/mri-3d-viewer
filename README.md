# MRI 3D viewer

An interactive 3D explainer for a cervical-spine and brain MRI report: what was found, how it
works, and what to do about it — on a schematic anatomy model, in Russian and English.

**Open it:** https://dimichgh.github.io/mri-3d-viewer/

- Rotate, zoom and pan; preset views; layers (skin, muscles, bones, discs, dural sac, spinal
  cord, nerves, arteries, brain) with opacity; x-ray mode; axial, sagittal and coronal cuts.
- Hover a marker for an explanation, spoken by the browser's own speech synthesis or shown as
  text (the button at the top switches). Click to fly to it. Doctor mode adds technical detail.
- MRI-like slices of the model, shown beside the matching cut of the 3D view.
- A plan panel (what to do and when, key measurements against her own normal levels, safety
  rules) and a guided tour of the findings, most important first.
- Each finding says how the images compare with the written report (confirmed, revised, not
  confirmed).

**This is not a diagnosis, and the patient's images are not included.** The model is schematic:
findings are placed from the written radiology report and from a specialist-style review of the
scans, so positions are approximate. The patient is not identified. All decisions belong with
the treating doctors.

Static files only: open `index.html` locally, or serve the folder from any static host.

## Credits and licenses

- Anatomy: [Z-Anatomy](https://www.z-anatomy.com/) (CC BY-SA 4.0), derived from BodyParts3D
  © The Database Center for Life Science (DBCLS). The anatomy geometry in `data/` is derived
  from it and shared under CC BY-SA 4.0.
- [three.js](https://threejs.org/) (MIT), bundled in `app.bundle.js`.
